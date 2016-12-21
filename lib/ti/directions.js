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

var TiDirections = function (_React$Component) {
    _inherits(TiDirections, _React$Component);

    function TiDirections() {
        _classCallCheck(this, TiDirections);

        return _possibleConstructorReturn(this, (TiDirections.__proto__ || Object.getPrototypeOf(TiDirections)).apply(this, arguments));
    }

    _createClass(TiDirections, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.8 15.8l-4.5-4.3c-1-0.9-2.5-1.5-3.8-1.5h-4.8v-0.8c0-1.4-1.2-2.5-2.5-2.5s-2.5 1.1-2.5 2.5v0.8h-5.9c-3.2 0-5.8 2.6-5.8 5.8 0 2.4 1.4 4.4 3.4 5.3l-3.1 3.1 4.3 4.2c0.9 1 2.4 1.6 3.7 1.6h3.7l1.3 6.7h1.7l1.3-6.7h4.5c3.3 0 5.9-2.6 5.9-5.8 0-1.5-0.6-2.9-1.6-3.9 0.1-0.1 0.1-0.1 0.2-0.1l4.5-4.4z m-9 10.9h-12.5c-0.4 0-1.1-0.3-1.4-0.6l-1.9-1.9 1.9-1.9c0.3-0.4 1-0.6 1.4-0.6h12.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z m2.2-8.9c-0.4 0.3-1 0.5-1.5 0.5h-15.7c-1.3 0-2.5-1.1-2.5-2.5s1.2-2.5 2.5-2.5h15.7c0.5 0 1.1 0.3 1.5 0.6l2 1.9-2 2z' })
                )
            );
        }
    }]);

    return TiDirections;
}(React.Component);

exports.default = TiDirections;
module.exports = exports['default'];