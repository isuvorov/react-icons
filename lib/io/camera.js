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

var IoCamera = function (_React$Component) {
    _inherits(IoCamera, _React$Component);

    function IoCamera() {
        _classCallCheck(this, IoCamera);

        return _possibleConstructorReturn(this, (IoCamera.__proto__ || Object.getPrototypeOf(IoCamera)).apply(this, arguments));
    }

    _createClass(IoCamera, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.3 11.5c1.5 0 2.7 1.1 2.7 2.6v15.7c0 1.5-1.2 2.7-2.7 2.7h-27.1c-1.5 0-2.7-1.2-2.7-2.7v-15.7c0-1.5 1.2-2.6 2.7-2.6h5.3l3.1-3.1c0.5-0.6 1.2-0.9 1.9-0.9h6.6c0.7 0 1.3 0.3 1.8 0.8l3.2 3.2h5.2z m-13.5 17.1c3.9 0 7.1-3.3 7.1-7.3s-3.2-7.2-7.1-7.2-7.2 3.2-7.2 7.2 3.2 7.3 7.2 7.3z m13.1-13c0.6 0 1.1-0.4 1.1-1.1s-0.5-1.1-1.1-1.1-1.1 0.5-1.1 1.1 0.5 1.1 1.1 1.1z m-13.1 0.3c2.9 0 5.4 2.4 5.4 5.4s-2.5 5.5-5.4 5.5c-3.1 0-5.5-2.4-5.5-5.5s2.4-5.4 5.5-5.4z' })
                )
            );
        }
    }]);

    return IoCamera;
}(React.Component);

exports.default = IoCamera;
module.exports = exports['default'];