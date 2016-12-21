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

var IoIosCamera = function (_React$Component) {
    _inherits(IoIosCamera, _React$Component);

    function IoIosCamera() {
        _classCallCheck(this, IoIosCamera);

        return _possibleConstructorReturn(this, (IoIosCamera.__proto__ || Object.getPrototypeOf(IoIosCamera)).apply(this, arguments));
    }

    _createClass(IoIosCamera, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.7 12.5c1.4 0 2.3 1 2.3 2.4v13.8c0 1.4-0.9 2.6-2.3 2.6h-25c-1.4 0-2.7-1.2-2.7-2.6v-13.8c0-1.4 1.3-2.4 2.7-2.4h1v-1.2h2.6v1.2h1c2.5-2.8 3.4-3.7 4.3-3.7h6.9c1 0 1.8 0.9 4.3 3.7h4.9z m-12.7 15.6c3.7 0 6.7-2.9 6.7-6.6s-3-6.7-6.7-6.7-6.7 3-6.7 6.7 3 6.6 6.7 6.6z m8.8-11.8v-1.3h-1.3v1.3h1.3z m-8.8-0.2c3 0 5.5 2.4 5.5 5.4s-2.5 5.4-5.5 5.4-5.5-2.4-5.5-5.4 2.5-5.4 5.5-5.4z m0 7.9c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z' })
                )
            );
        }
    }]);

    return IoIosCamera;
}(React.Component);

exports.default = IoIosCamera;
module.exports = exports['default'];