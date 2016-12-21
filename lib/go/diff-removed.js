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

var GoDiffRemoved = function (_React$Component) {
    _inherits(GoDiffRemoved, _React$Component);

    function GoDiffRemoved() {
        _classCallCheck(this, GoDiffRemoved);

        return _possibleConstructorReturn(this, (GoDiffRemoved.__proto__ || Object.getPrototypeOf(GoDiffRemoved)).apply(this, arguments));
    }

    _createClass(GoDiffRemoved, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 2.5h-30c-1.2 0-2.5 1.3-2.5 2.5v30c0 1.3 1.3 2.5 2.5 2.5h30c1.3 0 2.5-1.2 2.5-2.5v-30c0-1.2-1.2-2.5-2.5-2.5z m-2.5 28.8c0 0.6-0.7 1.2-1.2 1.2h-22.5c-0.8 0-1.3-0.5-1.3-1.2v-22.5c0-0.7 0.6-1.3 1.3-1.3h22.5c0.5 0 1.2 0.6 1.2 1.3v22.5z m-20-8.8h15v-5h-15v5z' })
                )
            );
        }
    }]);

    return GoDiffRemoved;
}(React.Component);

exports.default = GoDiffRemoved;
module.exports = exports['default'];