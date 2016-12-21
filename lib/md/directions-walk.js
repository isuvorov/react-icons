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

var MdDirectionsWalk = function (_React$Component) {
    _inherits(MdDirectionsWalk, _React$Component);

    function MdDirectionsWalk() {
        _classCallCheck(this, MdDirectionsWalk);

        return _possibleConstructorReturn(this, (MdDirectionsWalk.__proto__ || Object.getPrototypeOf(MdDirectionsWalk)).apply(this, arguments));
    }

    _createClass(MdDirectionsWalk, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.3 14.8l-4.7 23.6h3.6l3-13.4 3.4 3.4v10h3.4v-12.5l-3.5-3.4 1-5c2.2 2.5 5.5 4.1 9.1 4.1v-3.2c-3.2 0-5.7-1.8-7.1-4.1l-1.7-2.7c-0.7-1-1.6-1.6-2.8-1.6-0.5 0-0.9 0.2-1.3 0.2l-8.7 3.6v7.8h3.4v-5.6l2.9-1.2z m6.2-5.7c-1.8 0-3.4-1.4-3.4-3.2s1.6-3.4 3.4-3.4 3.4 1.6 3.4 3.4-1.6 3.2-3.4 3.2z' })
                )
            );
        }
    }]);

    return MdDirectionsWalk;
}(React.Component);

exports.default = MdDirectionsWalk;
module.exports = exports['default'];