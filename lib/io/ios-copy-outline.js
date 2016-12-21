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

var IoIosCopyOutline = function (_React$Component) {
    _inherits(IoIosCopyOutline, _React$Component);

    function IoIosCopyOutline() {
        _classCallCheck(this, IoIosCopyOutline);

        return _possibleConstructorReturn(this, (IoIosCopyOutline.__proto__ || Object.getPrototypeOf(IoIosCopyOutline)).apply(this, arguments));
    }

    _createClass(IoIosCopyOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.5 7.5v5h5v1.3h-6.2v-6.3h1.2z m1.6-2.5l5.9 5.9v20.4h-3.7v3.7h-18.8v-26.2h3.8v-3.8h12.8z m0.9 28.8v-2.5h-13.7v-21.3h-2.5v23.8h16.2z m3.8-3.8v-18.6l-5.1-5.1h-11.2v23.7h16.3z' })
                )
            );
        }
    }]);

    return IoIosCopyOutline;
}(React.Component);

exports.default = IoIosCopyOutline;
module.exports = exports['default'];