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

var IoIosPieOutline = function (_React$Component) {
    _inherits(IoIosPieOutline, _React$Component);

    function IoIosPieOutline() {
        _classCallCheck(this, IoIosPieOutline);

        return _possibleConstructorReturn(this, (IoIosPieOutline.__proto__ || Object.getPrototypeOf(IoIosPieOutline)).apply(this, arguments));
    }

    _createClass(IoIosPieOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 6.3v17.1l-0.9 0.4-14.1 3.5c0.5 1 1 1.9 1.6 2.8 1 1.2 2 2.3 3.2 3.3 2.6 1.8 5.7 2.8 8.9 2.8 2.1 0 4-0.3 5.9-1.1 1.8-0.8 3.4-1.8 4.8-3.2s2.4-3 3.2-4.8c0.8-1.9 1.1-3.8 1.1-5.9 0-3.9-1.5-7.8-4.3-10.6-2.5-2.5-5.9-4-9.4-4.3z m-1.2-1.3c8.9 0 16.2 7.3 16.2 16.3s-7.3 16.2-16.2 16.2c-7.2 0-13.4-4.7-15.5-11.2l15.5-3.8v-17.5z m-2.5-1.2c-2.5 0-4.7 0.5-6.7 1.4-1.9 0.8-3.4 2-4.8 3.6-2.2 2.6-3.5 6.2-3.5 9.9 0 1 0.2 3.6 0.9 5.4l14.1-3.6v-16.7z m1.2-1.3v19.1l-16 4c-1.5-2.5-1.5-6.9-1.5-6.9 0-7.1 4.5-16.2 17-16.2h0.5z' })
                )
            );
        }
    }]);

    return IoIosPieOutline;
}(React.Component);

exports.default = IoIosPieOutline;
module.exports = exports['default'];