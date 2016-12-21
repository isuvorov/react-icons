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

var IoIosTennisballOutline = function (_React$Component) {
    _inherits(IoIosTennisballOutline, _React$Component);

    function IoIosTennisballOutline() {
        _classCallCheck(this, IoIosTennisballOutline);

        return _possibleConstructorReturn(this, (IoIosTennisballOutline.__proto__ || Object.getPrototypeOf(IoIosTennisballOutline)).apply(this, arguments));
    }

    _createClass(IoIosTennisballOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36 20v0.6c0 0.4 0 0.9-0.1 1.3-0.8 7.6-7 13.6-14.6 14.3h-0.5s0 0.1-0.1 0.1h-0.9c-9 0-16.3-7.3-16.3-16.3s7.3-16.2 16.3-16.2 16.2 7.2 16.2 16.2z m-1.3 0c0-8.2-6.7-14.9-15-14.9-0.2 0-0.3 0.1-0.6 0.1 0.1 1.8 0.5 3.6 1.2 5.3 0.8 2 2 3.8 3.6 5.4s3.4 2.8 5.4 3.6c1.7 0.7 3.4 1 5.3 1.1 0-0.2 0.1-0.4 0.1-0.6z m-29.9 0c0 8.2 6.7 14.9 15 14.9h0.3c-0.1-1.7-0.6-3.5-1.2-5.1-0.8-2.1-2-3.8-3.6-5.3s-3.3-2.9-5.3-3.6c-1.7-0.7-3.5-1.1-5.2-1.2v0.3z m16.5 14.8c6.9-0.7 12.4-6 13.2-12.9-4.2-0.3-8.3-2-11.5-5.2s-4.9-7.2-5.1-11.5c-6.9 0.9-12.3 6.4-13 13.2 4.1 0.3 8.2 2 11.3 5.1s4.9 7.2 5.1 11.3z' })
                )
            );
        }
    }]);

    return IoIosTennisballOutline;
}(React.Component);

exports.default = IoIosTennisballOutline;
module.exports = exports['default'];