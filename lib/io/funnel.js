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

var IoFunnel = function (_React$Component) {
    _inherits(IoFunnel, _React$Component);

    function IoFunnel() {
        _classCallCheck(this, IoFunnel);

        return _possibleConstructorReturn(this, (IoFunnel.__proto__ || Object.getPrototypeOf(IoFunnel)).apply(this, arguments));
    }

    _createClass(IoFunnel, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 2.5c9.7 0 17.5 2.8 17.5 6.3 0 0.6-0.2 1.1-0.7 1.7-2.7 3.3-11.8 14-11.8 17v6.8c0 1.8-2.3 3.2-5 3.2s-5-1.4-5-3.2v-6.8c0-3-9.1-13.8-11.6-16.9-0.6-0.6-0.9-1.2-0.9-1.8 0-3.5 7.8-6.3 17.5-6.3z m0 10c7.2 0 13.8-1.7 13.8-3.7s-6.5-3.8-13.8-3.8-13.7 1.7-13.7 3.8 6.5 3.7 13.7 3.7z' })
                )
            );
        }
    }]);

    return IoFunnel;
}(React.Component);

exports.default = IoFunnel;
module.exports = exports['default'];