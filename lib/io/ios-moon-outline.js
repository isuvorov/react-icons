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

var IoIosMoonOutline = function (_React$Component) {
    _inherits(IoIosMoonOutline, _React$Component);

    function IoIosMoonOutline() {
        _classCallCheck(this, IoIosMoonOutline);

        return _possibleConstructorReturn(this, (IoIosMoonOutline.__proto__ || Object.getPrototypeOf(IoIosMoonOutline)).apply(this, arguments));
    }

    _createClass(IoIosMoonOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.7 24.6c0.6 0 1.1-0.1 1.7-0.2-0.3 0.5-0.6 0.9-1 1.4-1.6 1.9-4.1 3.2-6.8 3.2-5 0-9.1-4-9.1-9 0-4.1 2.7-7.5 6.3-8.7 0.6-0.1 1.1-0.2 1.7-0.3-0.3 0.5-0.6 1-0.8 1.4-0.6 1.1-0.9 2.4-0.9 3.7 0 2.3 0.9 4.4 2.5 6s3.8 2.5 6 2.5h0.4z m-6.1 3.1c1.9 0 3.7-0.7 5-1.8-5-0.4-9-4.7-9-9.8 0-1.1 0.1-2.2 0.4-3.1-2.5 1.2-4.2 4-4.2 7 0 4.3 3.5 7.7 7.8 7.7z' })
                )
            );
        }
    }]);

    return IoIosMoonOutline;
}(React.Component);

exports.default = IoIosMoonOutline;
module.exports = exports['default'];