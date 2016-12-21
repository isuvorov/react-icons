'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var IoIosSkipbackwardOutline = function (_React$Component) {
    _inherits(IoIosSkipbackwardOutline, _React$Component);

    function IoIosSkipbackwardOutline() {
        _classCallCheck(this, IoIosSkipbackwardOutline);

        return _possibleConstructorReturn(this, (IoIosSkipbackwardOutline.__proto__ || Object.getPrototypeOf(IoIosSkipbackwardOutline)).apply(this, arguments));
    }

    _createClass(IoIosSkipbackwardOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm7.5 7.5h6.2v11.1l18.8-11.1v25l-18.8-11.1v11.1h-6.2v-25z m6.3 12.5l0.5 0.3 17 10v-20.6l-17 10z m-5-11.2v22.5h3.6v-22.5h-3.6z' })
                )
            );
        }
    }]);

    return IoIosSkipbackwardOutline;
}(React.Component);

exports.default = IoIosSkipbackwardOutline;
module.exports = exports['default'];