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

var TiWaves = function (_React$Component) {
    _inherits(TiWaves, _React$Component);

    function TiWaves() {
        _classCallCheck(this, TiWaves);

        return _possibleConstructorReturn(this, (TiWaves.__proto__ || Object.getPrototypeOf(TiWaves)).apply(this, arguments));
    }

    _createClass(TiWaves, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25 31.7c-2.2 0-4.5-0.9-6.2-2.6-2.1-2.1-5.5-2.1-7.6 0-0.7 0.7-1.7 0.7-2.4 0s-0.6-1.7 0-2.3c3.4-3.4 9-3.4 12.4 0 2.1 2.1 5.5 2.1 7.6 0 0.7-0.7 1.7-0.7 2.4 0s0.6 1.7 0 2.3c-1.7 1.7-4 2.6-6.2 2.6z m0-6.7c-2.2 0-4.5-0.9-6.2-2.6-2.1-2.1-5.5-2.1-7.6 0-0.7 0.7-1.7 0.7-2.4 0s-0.6-1.7 0-2.3c3.4-3.4 9-3.4 12.4 0 2.1 2.1 5.5 2.1 7.6 0 0.7-0.7 1.7-0.7 2.4 0s0.6 1.7 0 2.3c-1.7 1.7-4 2.6-6.2 2.6z m0-6.7c-2.2 0-4.5-0.8-6.2-2.5-2.1-2.1-5.5-2.1-7.6 0-0.7 0.6-1.7 0.6-2.4 0s-0.6-1.7 0-2.4c3.4-3.4 9-3.4 12.4 0 2.1 2.1 5.5 2.1 7.6 0 0.7-0.6 1.7-0.6 2.4 0s0.6 1.7 0 2.4c-1.7 1.7-4 2.5-6.2 2.5z' })
                )
            );
        }
    }]);

    return TiWaves;
}(React.Component);

exports.default = TiWaves;
module.exports = exports['default'];