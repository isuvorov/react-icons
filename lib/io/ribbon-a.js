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

var IoRibbonA = function (_React$Component) {
    _inherits(IoRibbonA, _React$Component);

    function IoRibbonA() {
        _classCallCheck(this, IoRibbonA);

        return _possibleConstructorReturn(this, (IoRibbonA.__proto__ || Object.getPrototypeOf(IoRibbonA)).apply(this, arguments));
    }

    _createClass(IoRibbonA, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.3 2.5l6.2 7.5-5 10.5c-1.9-2.4-4.6-3.9-7.7-4.2z m-15 0l6.4 13.8c-3.1 0.3-5.8 1.8-7.7 4.2l-5-10.5z m8.5 0h5.2l-4.1 8.8h-4.3l-4.1-8.8h7.3z m-1 15c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.4-10 10-10z m0 17.5c4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5-7.5 3.4-7.5 7.5 3.3 7.5 7.5 7.5z m0-14.4c3.8 0 6.8 3.1 6.8 6.9s-3 6.9-6.8 6.9-6.9-3.1-6.9-6.9 3-6.9 6.9-6.9z' })
                )
            );
        }
    }]);

    return IoRibbonA;
}(React.Component);

exports.default = IoRibbonA;
module.exports = exports['default'];