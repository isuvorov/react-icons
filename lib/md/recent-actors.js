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

var MdRecentActors = function (_React$Component) {
    _inherits(MdRecentActors, _React$Component);

    function MdRecentActors() {
        _classCallCheck(this, MdRecentActors);

        return _possibleConstructorReturn(this, (MdRecentActors.__proto__ || Object.getPrototypeOf(MdRecentActors)).apply(this, arguments));
    }

    _createClass(MdRecentActors, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.9 28.4v-1.3c0-2.5-5-3.7-7.5-3.7s-7.5 1.2-7.5 3.7v1.3h15z m-7.5-15.5c-2.1 0-3.8 1.7-3.8 3.7s1.7 3.8 3.8 3.8 3.7-1.7 3.7-3.8-1.7-3.7-3.7-3.7z m10-4.5c0.9 0 1.6 0.7 1.6 1.6v20c0 0.9-0.7 1.6-1.6 1.6h-20c-1 0-1.8-0.7-1.8-1.6v-20c0-0.9 0.8-1.6 1.8-1.6h20z m5 23.2v-23.2h3.2v23.2h-3.2z m6.6-23.2h3.4v23.2h-3.4v-23.2z' })
                )
            );
        }
    }]);

    return MdRecentActors;
}(React.Component);

exports.default = MdRecentActors;
module.exports = exports['default'];