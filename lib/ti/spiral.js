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

var TiSpiral = function (_React$Component) {
    _inherits(TiSpiral, _React$Component);

    function TiSpiral() {
        _classCallCheck(this, TiSpiral);

        return _possibleConstructorReturn(this, (TiSpiral.__proto__ || Object.getPrototypeOf(TiSpiral)).apply(this, arguments));
    }

    _createClass(TiSpiral, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 19.7c1.7-0.7 1.2-3 0-4-1.8-1.5-4.5-0.7-5.7 1.3-2.5 4 1.5 8.3 5.7 8.2 4.5-0.4 7.2-4.9 6.2-9-1.2-5-6.5-7.5-11.2-6-4.3 1.3-7 5.8-6.7 10.3 0.5 5 4.4 9 9.2 9.8 4.7 0.9 9.5-1.3 12-5.3 1.2-1.8 2-4 2-6.3 0-0.9 0.8-1.7 1.8-1.5 1.4 0 1.7 1.3 1.5 2.3-0.6 7.8-7.5 14.3-15.5 14.3-9.8 0-17.5-10.3-13.3-19.6 4.2-9 17.2-10.9 22.2-2 2.5 4.1 2 9.6-1.5 13.1-3.4 3.4-8.9 4-12.9 1.2-3.6-2.7-4.8-8.2-1.8-12 2.8-3.8 9.2-4 11.7 0.3 1.8 3.2 0 8.7-4.2 8.2-2.7 0-5-2.8-3.5-5.3 1-1.5 3.2-1 3.8 0.1 0.4 1.4 0.2 1.9 0.2 1.9z' })
                )
            );
        }
    }]);

    return TiSpiral;
}(React.Component);

exports.default = TiSpiral;
module.exports = exports['default'];