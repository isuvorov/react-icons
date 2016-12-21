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

var IoIosEye = function (_React$Component) {
    _inherits(IoIosEye, _React$Component);

    function IoIosEye() {
        _classCallCheck(this, IoIosEye);

        return _possibleConstructorReturn(this, (IoIosEye.__proto__ || Object.getPrototypeOf(IoIosEye)).apply(this, arguments));
    }

    _createClass(IoIosEye, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.9 20l0.1 0.1-0.5 0.4c-1.6 1.7-3.6 3.8-6.1 5.4-2.8 1.9-5.6 2.9-8.4 2.9-6.5 0-10.2-3.9-14.5-8.3l-0.5-0.5 0.1-0.1c3-3.1 5.2-5 7.3-6.3 2.5-1.6 4.9-2.3 7.6-2.3 6.5 0 11.4 4.6 14.9 8.7z m-14.9 6.3c3.4 0 6.3-2.9 6.3-6.3s-2.9-6.2-6.3-6.2-6.2 2.8-6.2 6.2 2.8 6.3 6.2 6.3z m-0.5-8.6c0 1.5 1.3 2.8 2.8 2.8 0.5 0 1.1-0.2 1.4-0.5 0 2.1-1.7 3.7-3.7 3.7s-3.8-1.6-3.8-3.7 1.8-3.8 3.8-3.8c-0.3 0.4-0.5 1-0.5 1.5z' })
                )
            );
        }
    }]);

    return IoIosEye;
}(React.Component);

exports.default = IoIosEye;
module.exports = exports['default'];