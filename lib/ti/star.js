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

var TiStar = function (_React$Component) {
    _inherits(TiStar, _React$Component);

    function TiStar() {
        _classCallCheck(this, TiStar);

        return _possibleConstructorReturn(this, (TiStar.__proto__ || Object.getPrototypeOf(TiStar)).apply(this, arguments));
    }

    _createClass(TiStar, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15.6 15.3l-8.8 0.9c-0.3 0.1-0.6 0.3-0.7 0.6s0 0.7 0.3 0.9c2.6 2.4 6.5 5.9 6.5 5.9 0 0-1.1 5.2-1.8 8.7-0.1 0.3 0.1 0.6 0.3 0.8 0.3 0.2 0.6 0.2 0.9 0.1 3.1-1.8 7.7-4.4 7.7-4.4s4.6 2.6 7.7 4.4c0.3 0.1 0.6 0.1 0.9-0.1 0.2-0.2 0.4-0.5 0.3-0.8-0.7-3.5-1.8-8.7-1.8-8.7l6.5-5.9c0.3-0.2 0.4-0.6 0.3-0.9s-0.4-0.5-0.7-0.6c-3.5-0.4-8.8-0.9-8.8-0.9l-3.6-8.1c-0.2-0.3-0.5-0.5-0.8-0.5s-0.6 0.2-0.8 0.5c-1.4 3.2-3.6 8.1-3.6 8.1z' })
                )
            );
        }
    }]);

    return TiStar;
}(React.Component);

exports.default = TiStar;
module.exports = exports['default'];