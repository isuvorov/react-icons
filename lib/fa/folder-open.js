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

var FaFolderOpen = function (_React$Component) {
    _inherits(FaFolderOpen, _React$Component);

    function FaFolderOpen() {
        _classCallCheck(this, FaFolderOpen);

        return _possibleConstructorReturn(this, (FaFolderOpen.__proto__ || Object.getPrototypeOf(FaFolderOpen)).apply(this, arguments));
    }

    _createClass(FaFolderOpen, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm39.9 21.2q0 0.6-0.6 1.4l-7.2 8.4q-0.9 1.1-2.5 1.9t-3.1 0.7h-23.1q-0.7 0-1.3-0.3t-0.5-0.9q0-0.6 0.6-1.4l7.2-8.4q0.9-1.1 2.5-1.8t3.1-0.8h23.1q0.7 0 1.3 0.3t0.5 0.9z m-7.2-7.3v3.4h-17.7q-2 0-4.2 1t-3.5 2.5l-7.3 8.6q0-0.1 0-0.3t0-0.3v-20.4q0-1.9 1.4-3.3t3.4-1.4h6.8q1.9 0 3.3 1.4t1.4 3.3v0.7h11.6q1.9 0 3.4 1.4t1.4 3.4z' })
                )
            );
        }
    }]);

    return FaFolderOpen;
}(React.Component);

exports.default = FaFolderOpen;
module.exports = exports['default'];