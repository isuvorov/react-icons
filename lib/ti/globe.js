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

var TiGlobe = function (_React$Component) {
    _inherits(TiGlobe, _React$Component);

    function TiGlobe() {
        _classCallCheck(this, TiGlobe);

        return _possibleConstructorReturn(this, (TiGlobe.__proto__ || Object.getPrototypeOf(TiGlobe)).apply(this, arguments));
    }

    _createClass(TiGlobe, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.3 33.3h-6.6c-1 0-1.7 0.8-1.7 1.7s0.7 1.7 1.7 1.7h16.6c1 0 1.7-0.8 1.7-1.7s-0.7-1.7-1.7-1.7h-6.6v-2c2.7-0.6 5.2-2 7.2-4 2.9-2.9 4.4-6.6 4.4-10.6 0-3.5-1.1-6.7-3.2-9.4l1.1-1.1c0.6-0.7 0.6-1.7 0-2.4-0.7-0.6-1.7-0.6-2.4 0l-3.4 3.4 1.2 1.2c2.2 2.2 3.4 5.2 3.4 8.3s-1.2 6-3.4 8.2-5.1 3.4-8.3 3.4-6-1.2-8.2-3.4c-0.7-0.6-1.7-0.6-2.4 0-0.6 0.7-0.6 1.7 0 2.4 2.9 2.8 6.6 4.4 10.6 4.4v1.6z m0-26.6c2.8 0 5.3 1.1 7.1 2.9 1.8 1.8 2.9 4.3 2.9 7.1 0 2.7-1.1 5.2-2.9 7-1.8 1.8-4.3 3-7.1 3-2.7 0-5.2-1.2-7-3-1.8-1.8-3-4.3-3-7s1.2-5.3 3-7.1c1.8-1.8 4.3-2.9 7-2.9z' })
                )
            );
        }
    }]);

    return TiGlobe;
}(React.Component);

exports.default = TiGlobe;
module.exports = exports['default'];