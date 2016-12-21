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

var IoFolder = function (_React$Component) {
    _inherits(IoFolder, _React$Component);

    function IoFolder() {
        _classCallCheck(this, IoFolder);

        return _possibleConstructorReturn(this, (IoFolder.__proto__ || Object.getPrototypeOf(IoFolder)).apply(this, arguments));
    }

    _createClass(IoFolder, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.6 15c1.4 0 1.5 0.5 1.4 1.4l-0.9 14.5c-0.1 0.9-0.3 1.6-1.7 1.6h-24.7c-1.5 0-1.6-0.7-1.7-1.6l-1-14.3c-0.1-0.9 0-1.6 1.4-1.6h27.2z m-0.3-3.8l0.1 2.6h-26.8c0-0.5 0.3-3.6 0.4-5 0.2-1.4 0.7-1.3 2-1.3h5.8c2.2 0 1.8 0 2.9 1.2 1.3 1.4 1.5 1.3 3.2 1.3h11.2c0.9 0 1.2 0.2 1.2 1.2z' })
                )
            );
        }
    }]);

    return IoFolder;
}(React.Component);

exports.default = IoFolder;
module.exports = exports['default'];