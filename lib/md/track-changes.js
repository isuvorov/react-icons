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

var MdTrackChanges = function (_React$Component) {
    _inherits(MdTrackChanges, _React$Component);

    function MdTrackChanges() {
        _classCallCheck(this, MdTrackChanges);

        return _possibleConstructorReturn(this, (MdTrackChanges.__proto__ || Object.getPrototypeOf(MdTrackChanges)).apply(this, arguments));
    }

    _createClass(MdTrackChanges, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.8 8.2c3 3.1 4.8 7.2 4.8 11.8 0 9.2-7.4 16.6-16.6 16.6s-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6h1.6v13.7c1.1 0.6 1.8 1.7 1.8 2.9 0 1.8-1.6 3.4-3.4 3.4s-3.4-1.6-3.4-3.4c0-1.2 0.7-2.3 1.8-2.9v-3.5c-2.9 0.8-5 3.3-5 6.4 0 3.7 2.9 6.6 6.6 6.6s6.6-2.9 6.6-6.6c0-1.8-0.7-3.4-1.9-4.7l2.3-2.3c1.8 1.8 3 4.3 3 7 0 5.6-4.5 10-10 10s-10-4.4-10-10c0-4.9 3.6-9.1 8.4-9.8v-3.4c-6.6 0.8-11.8 6.4-11.8 13.2 0 7.3 6.1 13.4 13.4 13.4s13.4-6.1 13.4-13.4c0-3.7-1.5-7-4-9.4z' })
                )
            );
        }
    }]);

    return MdTrackChanges;
}(React.Component);

exports.default = MdTrackChanges;
module.exports = exports['default'];