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

var TiLeaf = function (_React$Component) {
    _inherits(TiLeaf, _React$Component);

    function TiLeaf() {
        _classCallCheck(this, TiLeaf);

        return _possibleConstructorReturn(this, (TiLeaf.__proto__ || Object.getPrototypeOf(TiLeaf)).apply(this, arguments));
    }

    _createClass(TiLeaf, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.3 18.3c0-8.1-5.8-15.1-13.8-16.6l-0.3-0.1-0.3 0.1c-8.1 1.5-13.9 8.5-13.9 16.6 0 7.7 5.2 14.4 12.5 16.4v2c0 0.9 0.7 1.6 1.7 1.6s1.6-0.7 1.6-1.6v-2c7.4-2 12.5-8.7 12.5-16.4z m-12.5 12.9v-5l7.3-7.3c0.3-0.3 0.3-0.8 0-1.2s-0.9-0.3-1.2 0l-6.1 6.1v-6l4-3.9c0.3-0.3 0.3-0.8 0-1.2s-0.9-0.3-1.2 0l-2.8 2.8v-5.5c0-0.9-0.7-1.7-1.6-1.7s-1.7 0.8-1.7 1.7v5.5l-2.7-2.8c-0.4-0.3-0.9-0.3-1.2 0s-0.3 0.9 0 1.2l3.9 3.9v6l-6.1-6.1c-0.3-0.3-0.8-0.3-1.2 0s-0.3 0.9 0 1.2l7.3 7.3v5c-5.4-1.9-9.2-7-9.2-12.9 0-6.4 4.6-12 10.9-13.3 6.3 1.3 10.8 6.9 10.8 13.3 0 5.9-3.8 11-9.2 12.9z' })
                )
            );
        }
    }]);

    return TiLeaf;
}(React.Component);

exports.default = TiLeaf;
module.exports = exports['default'];