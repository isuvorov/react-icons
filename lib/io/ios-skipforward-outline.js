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

var IoIosSkipforwardOutline = function (_React$Component) {
    _inherits(IoIosSkipforwardOutline, _React$Component);

    function IoIosSkipforwardOutline() {
        _classCallCheck(this, IoIosSkipforwardOutline);

        return _possibleConstructorReturn(this, (IoIosSkipforwardOutline.__proto__ || Object.getPrototypeOf(IoIosSkipforwardOutline)).apply(this, arguments));
    }

    _createClass(IoIosSkipforwardOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.3 7.5h6.2v25h-6.2v-11.1l-18.8 11.1v-25l18.8 11.1v-11.1z m-0.6 12.8l0.6-0.3-0.6-0.3-16.9-10v20.6z m5.6 11v-22.5h-3.7v22.5h3.7z' })
                )
            );
        }
    }]);

    return IoIosSkipforwardOutline;
}(React.Component);

exports.default = IoIosSkipforwardOutline;
module.exports = exports['default'];