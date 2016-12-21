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

var GoBug = function (_React$Component) {
    _inherits(GoBug, _React$Component);

    function GoBug() {
        _classCallCheck(this, GoBug);

        return _possibleConstructorReturn(this, (GoBug.__proto__ || Object.getPrototypeOf(GoBug)).apply(this, arguments));
    }

    _createClass(GoBug, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15 6.1c-2 2.2-1.5 5.8-1.5 5.8s2.1 2.5 6.3 2.5c4.1 0 6.2-2.5 6.2-2.5s0.6-3.5-1.4-5.7c1.2-0.7 2-1.8 1.7-2.5-0.4-0.7-1.9-0.8-3.5-0.1-0.6 0.2-1.1 0.6-1.4 0.9-0.5-0.1-1-0.1-1.6-0.1-0.6 0-1.1 0-1.5 0.1-0.4-0.3-0.9-0.7-1.5-0.9-1.5-0.7-3.1-0.6-3.4 0.1-0.3 0.7 0.4 1.7 1.6 2.4z m15.7 16.2c-0.3-0.1-0.6-0.2-0.9-0.2 0-0.1 0-0.1 0-0.2 0-1.3-0.2-2.6-0.5-3.8 0.6 0.1 1.4-0.1 2.3-0.4 1.5-0.7 2.5-1.9 2.2-2.7-0.4-0.8-1.9-0.9-3.5-0.2-0.7 0.4-1.3 0.8-1.7 1.2-0.3-0.7-0.6-1.4-1-2-1.2 1-3.5 2.5-6.6 2.8v12.6s0 1.2-1.2 1.2-1.3-1.2-1.3-1.2v-12.6c-3.1-0.3-5.3-1.8-6.5-2.8-0.4 0.6-0.7 1.3-1 2-0.4-0.5-1-0.9-1.7-1.2-1.5-0.7-3.1-0.6-3.4 0.2-0.3 0.8 0.6 2 2.2 2.7 0.8 0.3 1.5 0.5 2.2 0.4-0.3 1.2-0.5 2.5-0.5 3.8 0 0.1 0 0.1 0 0.2-0.3 0.1-0.5 0.1-0.8 0.2-2.1 0.4-3.6 1.4-3.5 2.3 0.1 0.9 1.9 1.2 3.9 0.8 0.3-0.1 0.5-0.1 0.8-0.2 0.3 1.6 0.9 3.1 1.7 4.4-0.5 0.2-1 0.5-1.4 1-1.3 1.2-1.8 2.8-1.1 3.4s2.1 0.1 3.3-1.2c0.4-0.3 0.7-0.7 0.9-1.1 1.7 1.7 3.8 2.7 6.2 2.7 2.3 0 4.5-1 6.2-2.8 0.2 0.4 0.5 0.9 0.9 1.2 1.3 1.3 2.8 1.8 3.4 1.2s0.1-2.2-1.1-3.4c-0.5-0.5-1-0.9-1.5-1.1 0.8-1.3 1.3-2.7 1.7-4.3 0.3 0.1 0.6 0.1 0.9 0.2 2 0.4 3.7 0.1 3.9-0.8 0.1-0.9-1.5-1.9-3.5-2.3z' })
                )
            );
        }
    }]);

    return GoBug;
}(React.Component);

exports.default = GoBug;
module.exports = exports['default'];