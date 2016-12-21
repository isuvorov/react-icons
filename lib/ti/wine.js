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

var TiWine = function (_React$Component) {
    _inherits(TiWine, _React$Component);

    function TiWine() {
        _classCallCheck(this, TiWine);

        return _possibleConstructorReturn(this, (TiWine.__proto__ || Object.getPrototypeOf(TiWine)).apply(this, arguments));
    }

    _createClass(TiWine, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.3 15.7c0-4.2-1.5-9.3-1.6-9.5-0.2-0.7-0.9-1.2-1.6-1.2h-12.2c-0.7 0-1.4 0.5-1.6 1.2-0.1 0.2-1.6 5.3-1.6 9.5 0 4.6 3.3 8.4 7.7 9.1 0 0.1-0.1 0.1-0.1 0.2v6.7h-1.6c-1 0-1.7 0.7-1.7 1.6s0.7 1.7 1.7 1.7h6.6c1 0 1.7-0.7 1.7-1.7s-0.7-1.6-1.7-1.6h-1.6v-6.7c0-0.1-0.1-0.1-0.1-0.2 4.4-0.7 7.7-4.5 7.7-9.1z m-9.3 6c-3 0-5.4-2.2-5.9-5h11.8c-0.5 2.8-2.9 5-5.9 5z m-5.9-6.7c0.1-2.4 0.7-5.2 1.1-6.7h9.6c0.4 1.5 1 4.3 1.1 6.7h-11.8z' })
                )
            );
        }
    }]);

    return TiWine;
}(React.Component);

exports.default = TiWine;
module.exports = exports['default'];