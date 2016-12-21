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

var MdiStore = function (_React$Component) {
    _inherits(MdiStore, _React$Component);

    function MdiStore() {
        _classCallCheck(this, MdiStore);

        return _possibleConstructorReturn(this, (MdiStore.__proto__ || Object.getPrototypeOf(MdiStore)).apply(this, arguments));
    }

    _createClass(MdiStore, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,17.998L 5.99939,17.998L 5.99939,13.998L 11.9994,13.998M 20.9994,13.998L 20.9994,11.998L 19.9994,6.99796L 3.99939,6.99796L 2.99939,11.998L 2.99939,13.998L 3.99939,13.998L 3.99939,19.998L 13.9994,19.998L 13.9994,13.998L 17.9994,13.998L 17.9994,19.998L 19.9994,19.998L 19.9994,13.998M 19.9994,3.99796L 3.99939,3.99796L 3.99939,5.99796L 19.9994,5.99796L 19.9994,3.99796 Z ' })
                )
            );
        }
    }]);

    return MdiStore;
}(React.Component);

exports.default = MdiStore;
module.exports = exports['default'];